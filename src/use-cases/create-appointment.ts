import { AppointmentsRepository } from "./../repositories/appointments-repository";
import { Appointment } from "../entities/appointment";

interface CreateAppointmentRequest {
  customer: string;
  startsAt: Date;
  endsAt: Date;
}

type CreateAppointmentResponse = Appointment;

export class CreateAppointment {
  constructor(private appointmentsRepository: AppointmentsRepository) {}
  async execute({
    customer,
    endsAt,
    startsAt,
  }: CreateAppointmentRequest): Promise<CreateAppointmentResponse> {
    const overlappingAppointment =
      await this.appointmentsRepository.findOverlappingAppointment(
        startsAt,
        endsAt
      );

    if (overlappingAppointment) {
      throw new Error(
        "Another appointment overlaps this appointment dates / Outro agendamento se sobrepõe às datas deste agendamento"
      );
    }

    const appointment = new Appointment({ customer, endsAt, startsAt });

    await this.appointmentsRepository.create(appointment);

    return appointment;
  }
}

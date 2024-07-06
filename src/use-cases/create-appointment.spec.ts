import { describe, expect, it } from "vitest";
import { CreateAppointment } from "./create-appointment";
import { InMemoryAppointmentsRepository } from "../repositories/in-memory/in-memory-appointments-repository";
import { getFutureDate } from "../tests/utils/get-future-date";

describe("Create Appointment", () => {
  it("Deveria ser possivel criar um Agendamento", async () => {
    const startsAt = getFutureDate("2024-08-10");
    const endsAt = getFutureDate("2024-08-15");

    const appointmentsRepository = new InMemoryAppointmentsRepository();
    const createAppointment = new CreateAppointment(appointmentsRepository);

    await createAppointment.execute({
      customer: "John Doe",
      startsAt,
      endsAt,
    });

    expect(
      createAppointment.execute({
        customer: "John Doe",
        startsAt: getFutureDate("2024-08-14"),
        endsAt: getFutureDate("2024-08-18"),
      })
    ).rejects.toBeInstanceOf(Error);
  });
});

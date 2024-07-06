export interface AppintmentProps {
  customer: string;
  startsAt: Date;
  endsAt: Date;
}

export class Appointment {
  private props: AppintmentProps;

  get customer() {
    return this.props.customer;
  }

  get startAt() {
    return this.props.startsAt;
  }

  get endAt() {
    return this.props.endsAt;
  }

  constructor(props: AppintmentProps) {
    const { startsAt, endsAt } = props;

    if (startsAt <= new Date()) {
      throw new Error("Data é Inválida");
    }
    if (endsAt <= startsAt) {
      throw new Error("Data é Inválida");
    }
    this.props = props;
  }
}

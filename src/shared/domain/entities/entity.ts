import { v4 as uuidv4 } from 'uuid';

export abstract class Entity<Props = any> {
  public readonly _id: string;
  public readonly props: Props;

  constructor(props: Props, id?: string) {
    this._id = id ?? uuidv4();
    this.props = props;
  }

  get id(): string {
    return this._id;
  }

  toJSON(): Required<{ id: string } & Props> {
    return {
      id: this._id,
      ...this.props,
    } as Required<{ id: string } & Props>;
  }

  public equals(entity?: Entity<Props>): boolean {
    if (entity === null || entity === undefined) {
      return false;
    }

    if (this === entity) {
      return true;
    }

    if (!(entity instanceof Entity)) {
      return false;
    }

    return this.id === entity.id;
  }
}

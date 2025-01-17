import { validate as uuidValidate } from 'uuid';
import { Entity } from '../../entity';

type StubProps = {
  prop1: string;
  prop2: number;
};

class StubEntity extends Entity<StubProps> {}

describe('Entity unit tests', () => {
  it('should set props and id', () => {
    const props = {
      prop1: '',
      prop2: 0,
    };

    const entity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
    expect(entity.id).toBeDefined();
    expect(entity.id).not.toBeNull();
  });
});

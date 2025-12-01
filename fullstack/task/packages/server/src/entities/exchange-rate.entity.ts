import { Field, Float, ObjectType } from '@nestjs/graphql';
import { EntityWithMeta } from '../common';
import { Column, Entity } from 'typeorm';

@ObjectType()
@Entity()
export class ExchangeRate extends EntityWithMeta {
    @Field(() => String)
    @Column({ type: 'varchar', length: 100 })
    country!: string;

    @Field(() => String)
    @Column({ type: 'varchar', length: 100 })
    currency!: string;

    @Field(() => String)
    @Column({ type: 'varchar', length: 10 })
    currencyCode!: string;

    @Field(() => Float)
    @Column({ type: 'float' })
    amount!: number;

    @Field(() => Float)
    @Column({ type: 'float' })
    rate!: number;

    @Field(() => Date)
    @Column({ type: 'timestamptz' })
    validFor!: Date;
}

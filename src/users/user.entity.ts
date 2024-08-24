import { Model, Column, Table, DataType, PrimaryKey, AutoIncrement, AllowNull, Default } from "sequelize-typescript";
import { UserCreationAttrs } from "./interfaces/user.interface";


@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {

    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.INTEGER, unique: true })
    id: number;

    @AllowNull(false)
    @Column({ type: DataType.STRING, unique: true })
    email: string;

    @AllowNull(false)
    @Column({ type: DataType.STRING })
    password: string;

    @Default(false)
    @Column({ type: DataType.BOOLEAN })
    banned: boolean;

    @AllowNull(true)
    @Column({ type: DataType.STRING })
    banReason: string;
}

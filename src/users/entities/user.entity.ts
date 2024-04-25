import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_name: string;

    @Column()
    password: string;

    // 0: Admin; 1: Teacher; 2: Student
    @Column()
    role: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    email: string;

    @Column({ nullable: true, default: null })
    refresh_token: string;

    @Column({ nullable: true, default: null })
    avatar: string;

    // 1: Đang hoạt động; 0: Ngưng hoạt động
    @Column({ default: 1 })
    status: number;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;
}
package com.example.BonusTask;

import jakarta.persistence.*;


@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name="full_name")
    private String full_name;
    @Column(name="mail")
    private String mail;
    @Column(name="phone_number")
    private String phone_number;

    public Employee(int id, String full_name, String mail, String phone_number) {
        this.id = id;
        this.full_name = full_name;
        this.mail = mail;
        this.phone_number = phone_number;
    }

    public Employee(){

    }

    public String getFullName() {
        return full_name;
    }

    public void setFullName(String full_name) {
        this.full_name = full_name;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPhoneNumber() {
        return phone_number;
    }

    public void setPhoneNumber(String phone_number) {
        this.phone_number = phone_number;
    }
}

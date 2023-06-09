﻿using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace OkLens.Models;

public partial class OkLensContext : DbContext
{
    public OkLensContext()
    {
    }

    public OkLensContext(DbContextOptions<OkLensContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Contract> Contracts { get; set; }

    public virtual DbSet<Employee> Employees { get; set; }

    public virtual DbSet<HowKnow> HowKnows { get; set; }

    public virtual DbSet<Inspection> Inspections { get; set; }

    public virtual DbSet<ListEmployeeForView> ListEmployeeForViews { get; set; }

    public virtual DbSet<Patient> Patients { get; set; }

    public virtual DbSet<PatientForView> PatientForViews { get; set; }

    public virtual DbSet<Reception> Receptions { get; set; }

    public virtual DbSet<ReceptionView> ReceptionViews { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<Room> Rooms { get; set; }

    public virtual DbSet<Sale> Sales { get; set; }

    public virtual DbSet<Service> Services { get; set; }

    public virtual DbSet<Stock> Stocks { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Contract>(entity =>
        {
            entity.ToTable("Contract");

            entity.Property(e => e.ContractId).HasColumnName("ContractID");
            entity.Property(e => e.DateContract).HasColumnType("datetime");
            entity.Property(e => e.Number)
                .HasMaxLength(20)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Employee>(entity =>
        {
            entity.ToTable("Employee");

            entity.Property(e => e.EmployeeId).HasColumnName("EmployeeID");
            entity.Property(e => e.Category)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.DateBirthday).HasColumnType("date");
            entity.Property(e => e.Fname)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("FName");
            entity.Property(e => e.Lname)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("LName");
            entity.Property(e => e.Login)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.Password)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.RoleId).HasColumnName("RoleID");
            entity.Property(e => e.Sname)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("SName");

            entity.HasOne(d => d.Role).WithMany(p => p.Employees)
                .HasForeignKey(d => d.RoleId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Employee_Role");
        });

        modelBuilder.Entity<HowKnow>(entity =>
        {
            entity.ToTable("HowKnow");

            entity.Property(e => e.HowKnowId).HasColumnName("HowKnowID");
            entity.Property(e => e.Descr)
                .HasMaxLength(30)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Inspection>(entity =>
        {
            entity.ToTable("Inspection");

            entity.Property(e => e.InspectionId).HasColumnName("InspectionID");
            entity.Property(e => e.Anamnesis)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.CommentBms)
                .HasMaxLength(200)
                .IsUnicode(false)
                .HasColumnName("CommentBMS");
            entity.Property(e => e.Complaints)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.Conjuctiva)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Cornea)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Diagnosis)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.Eyelids)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.FrontCamera)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Iris)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.LeadingEye)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Lens)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Oaa)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("OAA");
            entity.Property(e => e.Orthophoria)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.PhoriaDist)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.PhoriaUp)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Pupil)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Recommend)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.Stereopsis)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.TestShobera)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.VitrousBody)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.Zao)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("ZAO");
        });

        modelBuilder.Entity<ListEmployeeForView>(entity =>
        {
            entity
                .HasNoKey()
                .ToView("ListEmployeeForView");

            entity.Property(e => e.Category)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.DateBirthday).HasColumnType("date");
            entity.Property(e => e.EmployeeId).HasColumnName("EmployeeID");
            entity.Property(e => e.Fio)
                .HasMaxLength(56)
                .IsUnicode(false)
                .HasColumnName("FIO");
            entity.Property(e => e.Login)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.RoleName)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Patient>(entity =>
        {
            entity.ToTable("Patient");

            entity.Property(e => e.PatientId).HasColumnName("PatientID");
            entity.Property(e => e.DateBirthday).HasColumnType("date");
            entity.Property(e => e.Fname)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("FName");
            entity.Property(e => e.Gender)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.GuarnatirPatientId).HasColumnName("GuarnatirPatientID");
            entity.Property(e => e.HowKnowId).HasColumnName("HowKnowID");
            entity.Property(e => e.Lname)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("LName");
            entity.Property(e => e.NumberDocument)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.PhoneNumber)
                .HasMaxLength(13)
                .IsUnicode(false);
            entity.Property(e => e.RegAdress)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.Sname)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("SName");
            entity.Property(e => e.TypeDocument)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.WorkPlace)
                .HasMaxLength(100)
                .IsUnicode(false);

            entity.HasOne(d => d.HowKnow).WithMany(p => p.Patients)
                .HasForeignKey(d => d.HowKnowId)
                .HasConstraintName("FK_Patient_HowKnow");
        });

        modelBuilder.Entity<PatientForView>(entity =>
        {
            entity
                .HasNoKey()
                .ToView("PatientForView");

            entity.Property(e => e.DateBirthday).HasColumnType("date");
            entity.Property(e => e.DateBirthdayGuar).HasColumnType("date");
            entity.Property(e => e.Fio)
                .HasMaxLength(56)
                .IsUnicode(false)
                .HasColumnName("FIO");
            entity.Property(e => e.Fioguarmatir)
                .HasMaxLength(56)
                .IsUnicode(false)
                .HasColumnName("FIOGuarmatir");
            entity.Property(e => e.Fname)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("FName");
            entity.Property(e => e.FnameGuar)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("FNameGuar");
            entity.Property(e => e.Gender)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.GenderGuar)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.GuarnatirPatientId).HasColumnName("GuarnatirPatientID");
            entity.Property(e => e.HowKnowDescr)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.HowKnowId).HasColumnName("HowKnowID");
            entity.Property(e => e.Lname)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("LName");
            entity.Property(e => e.LnameGuar)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("LNameGuar");
            entity.Property(e => e.NumberDocument)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.NumberDocumentGuar)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.PatientId).HasColumnName("PatientID");
            entity.Property(e => e.PhoneNumber)
                .HasMaxLength(13)
                .IsUnicode(false);
            entity.Property(e => e.PhoneNumberGuar)
                .HasMaxLength(13)
                .IsUnicode(false);
            entity.Property(e => e.RegAdress)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.RegAdressGuar)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.Sname)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("SName");
            entity.Property(e => e.SnameGuar)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("SNameGuar");
            entity.Property(e => e.TypeDocument)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.TypeDocumentGuar)
                .HasMaxLength(50)
                .IsUnicode(false);
            entity.Property(e => e.WorkPlace)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.WorkPlaceGuar)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Reception>(entity =>
        {
            entity.ToTable("Reception");

            entity.Property(e => e.ReceptionId).HasColumnName("ReceptionID");
            entity.Property(e => e.ContractId).HasColumnName("ContractID");
            entity.Property(e => e.DateEnd).HasColumnType("datetime");
            entity.Property(e => e.DateStart).HasColumnType("datetime");
            entity.Property(e => e.Descr)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.EmployeeId).HasColumnName("EmployeeID");
            entity.Property(e => e.InspectionId).HasColumnName("InspectionID");
            entity.Property(e => e.PatientId).HasColumnName("PatientID");
            entity.Property(e => e.RoomId).HasColumnName("RoomID");
            entity.Property(e => e.ServicesId).HasColumnName("ServicesID");

            entity.HasOne(d => d.Contract).WithMany(p => p.Receptions)
                .HasForeignKey(d => d.ContractId)
                .HasConstraintName("FK_Reception_Contract");

            entity.HasOne(d => d.Employee).WithMany(p => p.Receptions)
                .HasForeignKey(d => d.EmployeeId)
                .HasConstraintName("FK_Reception_Employee");

            entity.HasOne(d => d.Inspection).WithMany(p => p.Receptions)
                .HasForeignKey(d => d.InspectionId)
                .HasConstraintName("FK_Reception_Inspection");

            entity.HasOne(d => d.Patient).WithMany(p => p.Receptions)
                .HasForeignKey(d => d.PatientId)
                .HasConstraintName("FK_Reception_Patient");

            entity.HasOne(d => d.Room).WithMany(p => p.Receptions)
                .HasForeignKey(d => d.RoomId)
                .HasConstraintName("FK_Reception_Room");

            entity.HasOne(d => d.Services).WithMany(p => p.Receptions)
                .HasForeignKey(d => d.ServicesId)
                .HasConstraintName("FK_Reception_Services");
        });

        modelBuilder.Entity<ReceptionView>(entity =>
        {
            entity
                .HasNoKey()
                .ToView("ReceptionView");

            entity.Property(e => e.Adress)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.DateEnd).HasColumnType("datetime");
            entity.Property(e => e.DateStart).HasColumnType("datetime");
            entity.Property(e => e.Descr)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.EmployeeId).HasColumnName("EmployeeID");
            entity.Property(e => e.Fioemployee)
                .HasMaxLength(56)
                .IsUnicode(false)
                .HasColumnName("FIOEmployee");
            entity.Property(e => e.Fiopatient)
                .HasMaxLength(56)
                .IsUnicode(false)
                .HasColumnName("FIOPatient");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.ReceptionId).HasColumnName("ReceptionID");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.ToTable("Role");

            entity.Property(e => e.RoleId).HasColumnName("RoleID");
            entity.Property(e => e.RoleName)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Room>(entity =>
        {
            entity.ToTable("Room");

            entity.Property(e => e.RoomId).HasColumnName("RoomID");
            entity.Property(e => e.Adress)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.PhoneNumber)
                .HasMaxLength(20)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Sale>(entity =>
        {
            entity.HasKey(e => e.SalesId);

            entity.ToTable("Sale");

            entity.Property(e => e.SalesId).HasColumnName("SalesID");
            entity.Property(e => e.BasisForSale)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.EmployeeId).HasColumnName("EmployeeID");
            entity.Property(e => e.Status)
                .HasMaxLength(20)
                .IsUnicode(false);
            entity.Property(e => e.StockId).HasColumnName("StockID");

            entity.HasOne(d => d.Employee).WithMany(p => p.Sales)
                .HasForeignKey(d => d.EmployeeId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Sale_Employee");

            entity.HasOne(d => d.Stock).WithMany(p => p.Sales)
                .HasForeignKey(d => d.StockId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Sale_Stock");
        });

        modelBuilder.Entity<Service>(entity =>
        {
            entity.HasKey(e => e.ServicesId);

            entity.Property(e => e.ServicesId).HasColumnName("ServicesID");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Price).HasColumnType("money");
        });

        modelBuilder.Entity<Stock>(entity =>
        {
            entity.ToTable("Stock");

            entity.Property(e => e.StockId).HasColumnName("StockID");
            entity.Property(e => e.Descr)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Price).HasColumnType("money");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}

﻿// <auto-generated />
using HotelManagement.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace HotelManagement.Migrations
{
    [DbContext(typeof(Context))]
    partial class ContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.13")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("HotelManagement.Models.Bill", b =>
                {
                    b.Property<int>("bill_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Date")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.Property<double>("Taxes")
                        .HasColumnType("float");

                    b.Property<int>("gu_id")
                        .HasColumnType("int");

                    b.Property<int>("no_of_guest")
                        .HasColumnType("int");

                    b.HasKey("bill_id");

                    b.ToTable("Bills");
                });

            modelBuilder.Entity("HotelManagement.Models.Guest", b =>
                {
                    b.Property<int>("gu_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Company")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Gender")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<long>("Phone_no")
                        .HasColumnType("bigint");

                    b.HasKey("gu_id");

                    b.ToTable("Guests");
                });

            modelBuilder.Entity("HotelManagement.Models.Owner", b =>
                {
                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Designation")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Email");

                    b.ToTable("Owners");
                });

            modelBuilder.Entity("HotelManagement.Models.Payment", b =>
                {
                    b.Property<int>("pay_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Credit_details")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Pay_time")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Total")
                        .HasColumnType("float");

                    b.Property<int>("bill_id")
                        .HasColumnType("int");

                    b.HasKey("pay_id");

                    b.ToTable("Payments");
                });

            modelBuilder.Entity("HotelManagement.Models.Rates", b =>
                {
                    b.Property<string>("type")
                        .HasColumnType("nvarchar(450)");

                    b.Property<double>("Extension_price")
                        .HasColumnType("float");

                    b.Property<double>("first_night_price")
                        .HasColumnType("float");

                    b.Property<int>("no_of_day")
                        .HasColumnType("int");

                    b.Property<int>("no_of_guests")
                        .HasColumnType("int");

                    b.Property<double>("taxes")
                        .HasColumnType("float");

                    b.HasKey("type");

                    b.ToTable("Rate");
                });

            modelBuilder.Entity("HotelManagement.Models.Reservations", b =>
                {
                    b.Property<int>("res_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("check_in_date")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("check_out_date")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("gu_id")
                        .HasColumnType("int");

                    b.Property<int>("no_of_adults")
                        .HasColumnType("int");

                    b.Property<int>("no_of_child")
                        .HasColumnType("int");

                    b.Property<int>("number_of_nights")
                        .HasColumnType("int");

                    b.Property<int>("room_no")
                        .HasColumnType("int");

                    b.Property<string>("status")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("res_id");

                    b.ToTable("Reservation");
                });

            modelBuilder.Entity("HotelManagement.Models.Room", b =>
                {
                    b.Property<int>("Room_no")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Room_image")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("type")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Room_no");

                    b.ToTable("Rooms");
                });

            modelBuilder.Entity("HotelManagement.Models.Staff_Members", b =>
                {
                    b.Property<int>("stm_id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Age")
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Emp_Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Emp_Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Emp_Sal")
                        .HasColumnType("float");

                    b.Property<string>("NIC")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Occupation")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("stm_id");

                    b.ToTable("Staff_Member");
                });
#pragma warning restore 612, 618
        }
    }
}

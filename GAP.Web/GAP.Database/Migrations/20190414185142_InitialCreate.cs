using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GAP.Infrastructure.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    CustomerId = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FullName_Name = table.Column<string>(maxLength: 100, nullable: false),
                    FullName_Surname = table.Column<string>(maxLength: 200, nullable: false),
                    Email = table.Column<string>(maxLength: 300, nullable: false),
                    Status = table.Column<int>(nullable: false),
                    BirthDay = table.Column<DateTime>(nullable: false),
                    Nit = table.Column<string>(nullable: false),
                    DocumentType = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers", x => x.CustomerId);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FullName_Name = table.Column<string>(maxLength: 100, nullable: false),
                    FullName_Surname = table.Column<string>(maxLength: 200, nullable: false),
                    Email = table.Column<string>(maxLength: 300, nullable: false),
                    SignIn_Login = table.Column<string>(maxLength: 100, nullable: false),
                    SignIn_Password = table.Column<string>(maxLength: 500, nullable: false),
                    Roles = table.Column<int>(nullable: false),
                    Status = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.CreateTable(
                name: "Appointments",
                columns: table => new
                {
                    AppointmentId = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CustomerId = table.Column<long>(nullable: false),
                    Status = table.Column<int>(nullable: false),
                    AppointmentDate = table.Column<DateTime>(nullable: false),
                    Department = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Appointments", x => x.AppointmentId);
                    table.ForeignKey(
                        name: "FK_Appointments_Customers_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customers",
                        principalColumn: "CustomerId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "Email", "Roles", "Status", "FullName_Name", "FullName_Surname", "SignIn_Login", "SignIn_Password" },
                values: new object[] { 1L, "administrator@administrator.com", 3, 1, "Administrator", "Administrator", "admin", "1h0ATANFe6x7kMHo1PURE74WI0ayevUwfK/+Ie+IWX/xWrFWngcVUwL/ewryn38EMVMQBFaNo4SaVwgXaBWnDw==" });

            migrationBuilder.CreateIndex(
                name: "IX_Appointments_CustomerId",
                table: "Appointments",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_Customers_Nit",
                table: "Customers",
                column: "Nit",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_Email",
                table: "Users",
                column: "Email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_SignIn_Login",
                table: "Users",
                column: "SignIn_Login",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Appointments");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Customers");
        }
    }
}

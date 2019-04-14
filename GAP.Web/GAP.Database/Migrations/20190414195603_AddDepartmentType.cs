using Microsoft.EntityFrameworkCore.Migrations;

namespace GAP.Infrastructure.Migrations
{
    public partial class AddDepartmentType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Department",
                table: "Appointments");

            migrationBuilder.AddColumn<int>(
                name: "DepartmentTypeId",
                table: "Appointments",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "departments",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false, defaultValue: 1),
                    Name = table.Column<string>(maxLength: 200, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_departments", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Appointments_DepartmentTypeId",
                table: "Appointments",
                column: "DepartmentTypeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Appointments_departments_DepartmentTypeId",
                table: "Appointments",
                column: "DepartmentTypeId",
                principalTable: "departments",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Appointments_departments_DepartmentTypeId",
                table: "Appointments");

            migrationBuilder.DropTable(
                name: "departments");

            migrationBuilder.DropIndex(
                name: "IX_Appointments_DepartmentTypeId",
                table: "Appointments");

            migrationBuilder.DropColumn(
                name: "DepartmentTypeId",
                table: "Appointments");

            migrationBuilder.AddColumn<string>(
                name: "Department",
                table: "Appointments",
                nullable: false,
                defaultValue: "");
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

namespace GAP.Infrastructure.Migrations
{
    public partial class AddDepartments : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "departments",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "General" },
                    { 2, "Odontology" },
                    { 3, "Pediatrics" },
                    { 4, "Neurology" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "departments",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "departments",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "departments",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "departments",
                keyColumn: "Id",
                keyValue: 4);
        }
    }
}

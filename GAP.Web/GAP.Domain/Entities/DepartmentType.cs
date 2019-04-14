namespace GAP.Domain
{
    public class DepartmentType : Enumeration
    {
        public static DepartmentType General = new DepartmentType(1, "General");
        public static DepartmentType Odontology = new DepartmentType(2, "Odontology");
        public static DepartmentType Pediatrics = new DepartmentType(3, "Pediatrics");
        public static DepartmentType Neurology = new DepartmentType(3, "Neurology");

        public DepartmentType(int id, string name)
            : base(id, name)
        {
        }
    }
}

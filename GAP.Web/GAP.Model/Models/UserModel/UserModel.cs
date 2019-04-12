using GAP.Model.Enums;

namespace GAP.Model.Models.UserModel
{
    public class UserModel
    {
        public long UserId { get; set; }

        public string FullName { get; set; }

        public string Email { get; set; }

        public Roles Roles { get; set; }
    }
}

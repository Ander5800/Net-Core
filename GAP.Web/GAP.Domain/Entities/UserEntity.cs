using GAP.Domain.ValueObjects;
using GAP.Model;
using System.ComponentModel.DataAnnotations;

namespace GAP.Domain
{
    public class UserEntity
    {
        public UserEntity
        (
            long userId,
            FullName fullName,
            string email,
            SignIn signIn,
            Roles roles,
            Status status
        )
        {
            UserId = userId;
            FullName = fullName;
            Email = email;
            SignIn = signIn;
            Roles = roles;
            Status = status;
        }

        public UserEntity() { }

        public long UserId { get; private set; }

        public FullName FullName { get; private set; }

        public string Email { get; private set; }

        public SignIn SignIn { get; private set; }

        public Roles Roles { get; private set; }

        public Status Status { get; private set; }

        public void Add()
        {
            UserId = 0;
            Roles = Roles.User;
            Status = Status.Active;
        }

        public void Inactivate()
        {
            Status = Status.Inactive;
        }
    }
}

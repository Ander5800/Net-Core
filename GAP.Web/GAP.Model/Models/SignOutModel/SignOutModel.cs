namespace GAP.Model.Models.SignOutModel
{
    public class SignOutModel
    {
        public SignOutModel(long userId)
        {
            UserId = userId;
        }

        public long UserId { get; }
    }
}

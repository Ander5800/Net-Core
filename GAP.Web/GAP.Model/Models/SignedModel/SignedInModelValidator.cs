using DotNetCore.Validation;
using FluentValidation;
using GAP.CrossCutting.Resources;

namespace GAP.Model
{
    public sealed class SignedInModelValidator : Validator<SignedInModel>
    {
        public SignedInModelValidator() : base(Texts.AuthenticationInvalid)
        {
            RuleFor(x => x).NotNull();
            RuleFor(x => x.UserId).GreaterThan(0);
            RuleFor(x => x.Roles).NotEqual(Roles.None);
        }
    }
}

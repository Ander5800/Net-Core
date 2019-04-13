using DotNetCore.Validation;
using FluentValidation;
using GAP.CrossCutting.Resources;

namespace GAP.Model.Models
{
    public sealed class SignInModelValidator : Validator<SignInModel>
    {
        public SignInModelValidator() : base(Texts.AuthenticationInvalid)
        {
            RuleFor(x => x).NotNull();
            RuleFor(x => x.Login).NotNull().NotEmpty();
            RuleFor(x => x.Password).NotNull().NotEmpty();
        }
    }
}

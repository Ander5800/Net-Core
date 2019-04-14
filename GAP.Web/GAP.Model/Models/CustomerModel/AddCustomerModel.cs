using System;

namespace GAP.Model
{
    public class AddCustomerModel
    {
        public AddCustomerModel
        (
            FullNameModel fullName,
            string email,
            Status status,
            DateTime birthDay,
            string nit,
            DocumentType documentType
        )
        {
            FullName = fullName;
            Email = email;
            Status = status;
            BirthDay = birthDay;
            Nit = nit;
            DocumentType = documentType;
        }

        public FullNameModel FullName { get; }

        public string Email { get; }

        public Status Status { get; }

        public DateTime BirthDay { get; }

        public string Nit { get; }

        public DocumentType DocumentType { get; }
    }
}

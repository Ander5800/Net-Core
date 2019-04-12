using System;

namespace GAP.Model
{
    public sealed class CustomerModel
    {
        public long CustomerId { get; set; }

        public FullNameModel FullName { get; set; }

        public string Email { get; set; }

        public Status Status { get; set; }

        public DateTime BirthDay { get; set; }

        public string Nit { get; set; }

        public DocumentType DocumentType { get; set; }
    }
}

using System;
using System.Collections.Generic;

namespace OkLens.Models;

public partial class Contract
{
    public int ContractId { get; set; }

    public DateTime DateContract { get; set; }

    public string Number { get; set; } = null!;

    public virtual ICollection<Reception> Receptions { get; set; } = new List<Reception>();
}

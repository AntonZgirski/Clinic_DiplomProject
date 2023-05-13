using System;
using System.Collections.Generic;

namespace OkLens.Models;

public partial class Inspection
{
    public int InspectionId { get; set; }

    public string Compliant { get; set; } = null!;

    public virtual ICollection<Reception> Receptions { get; set; } = new List<Reception>();
}

using System;
using System.Collections.Generic;

namespace OkLens.Models;

public partial class Service
{
    public int ServicesId { get; set; }

    public string Name { get; set; } = null!;

    public decimal Price { get; set; }

    public virtual ICollection<Reception> Receptions { get; set; } = new List<Reception>();
}

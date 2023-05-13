using System;
using System.Collections.Generic;

namespace OkLens.Models;

public partial class Stock
{
    public int StockId { get; set; }

    public string Name { get; set; } = null!;

    public string Descr { get; set; } = null!;

    public int Count { get; set; }

    public decimal Price { get; set; }

    public virtual ICollection<Sale> Sales { get; set; } = new List<Sale>();
}

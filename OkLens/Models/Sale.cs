using System;
using System.Collections.Generic;

namespace OkLens.Models;

public partial class Sale
{
    public int SalesId { get; set; }

    public int StockId { get; set; }

    public int EmployeeId { get; set; }

    public string Status { get; set; } = null!;

    public string? BasisForSale { get; set; }

    public virtual Employee Employee { get; set; } = null!;

    public virtual Stock Stock { get; set; } = null!;
}

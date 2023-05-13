using System;
using System.Collections.Generic;

namespace OkLens.Models;

public partial class Room
{
    public int RoomId { get; set; }

    public string Adress { get; set; } = null!;

    public string PhoneNumber { get; set; } = null!;

    public int? CountWorkPlace { get; set; }

    public virtual ICollection<Reception> Receptions { get; set; } = new List<Reception>();
}

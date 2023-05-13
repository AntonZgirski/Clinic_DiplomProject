namespace OkLens.Models
{
  public static class ErrorMessage
  {
    public const string ErrorUserNotFound = "Пользователь не найден!";
    public const string ErrorPasswordIncorrect = "Неверный пароль!";
    public const string ErrorPasswordOrLoginIncorrect = "Неверный логин или пароль!";
    public const string MesPasswordSaveTryAgain = "Пароль сохранен, повторите вход.";

    public static string ErrorDublicateLoginEmployee(string login)
    {
      return $"Сотрудник с логином \"{login}\" зарегестрирован в системе!";
    }

  }
}

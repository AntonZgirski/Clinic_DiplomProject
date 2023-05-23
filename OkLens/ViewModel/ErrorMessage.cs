namespace OkLens.ViewModel
{
    public static class ErrorMessage
    {
        public const string ErrorUserNotFound = "Пользователь не найден!";
        public const string ErrorPasswordIncorrect = "Неверный пароль!";
        public const string ErrorPasswordOrLoginIncorrect = "Неверный логин или пароль!";
        public const string MesPasswordSaveTryAgain = "Пароль сохранен, повторите вход.";
        public const string SuccesReserPassword = "Пароль сброшен.";
        public const string ErrorDeletePatient = "Пациент записан на прием, удаление не возможно!";


        public static string SuccesDeleteEmployee(string fio)
        {
            return $"Сотрудник \"{fio}\" удален из системы.";
        }

        public static string ErrorDublicateLoginEmployee(string login)
        {
            return $"Сотрудник с логином \"{login}\" зарегестрирован в системе!";
        }

    }
}

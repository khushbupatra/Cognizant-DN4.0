using System;

public class TestLogger
{
    public static void Main(string[] args)
    {
        Logger l1 = Logger.GetInstance();
        l1.Log("Hi, my name is Khushbu");

        Logger l2 = Logger.GetInstance();
        l2.Log("I am in 4th year B.Tech CSE");

        if (l1 == l2)
        {
            Console.WriteLine("Both l1 and l2 are the same instance.");
        }
        else
        {
            Console.WriteLine("Singleton failed.");
        }
    }
}
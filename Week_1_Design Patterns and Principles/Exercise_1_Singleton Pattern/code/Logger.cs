using System;

public class Logger
{
    // Step 2: Define a Singleton class with a private static instance
    private static Logger? instance;

    // Step 2: Private constructor to restrict instantiation from outside
    private Logger()
    {
        Console.WriteLine("Initialized");
    }

    // Step 2 & 3: Provide a public static method to return the single instance
    public static Logger GetInstance()
    {
        if (instance == null)
        {
            instance = new Logger();
        }
        return instance;
    }

    // Logging method for consistent logging
    public void Log(string msg)
    {
        Console.WriteLine("Log: " + msg);
    }
}

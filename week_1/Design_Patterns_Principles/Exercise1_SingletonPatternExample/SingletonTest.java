public class SingletonTest {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("First message logged.");
        logger2.log("Second message logged.");

        if (logger1 == logger2) {
            System.out.println("Success: Both logger1 and logger2 point to the exact same instance.");
        } else {
            System.out.println("Error: Multiple instances were created.");
        }
    }
}

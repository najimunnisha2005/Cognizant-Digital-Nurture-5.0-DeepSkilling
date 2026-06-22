package week_1.DSA.Exercise2_EcommercePlatformSearchFunction;

public class EcommerceSearchTest {

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Mobile", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Book", "Education")
        };

        int searchId = 104;
        Product linearResult =
                SearchAlgorithms.linearSearch(products, searchId);

        System.out.println("Linear Search Result:");
        if (linearResult != null) {
            System.out.println(linearResult);
        } else {
            System.out.println("Product not found");
        }

        Product binaryResult =
                SearchAlgorithms.binarySearch(products, searchId);

        System.out.println("\nBinary Search Result:");
        if (binaryResult != null) {
            System.out.println(binaryResult);
        } else {
            System.out.println("Product not found");
        }
    }
}

public class FactoryMethodTest {
    public static void main(String[] args) {
        System.out.println("=== Document Management System using Factory Method ===\n");
        DocumentFactory factory;
        factory = new WordDocumentFactory();
        factory.createNewDocument();
        factory = new PdfDocumentFactory();
        factory.createNewDocument();
        factory = new ExcelDocumentFactory();
        factory.createNewDocument();
    }
}
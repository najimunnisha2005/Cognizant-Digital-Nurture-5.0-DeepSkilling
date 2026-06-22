public abstract class DocumentFactory {
    public abstract Document createDocument();
    public void createNewDocument() {
        Document doc = createDocument();
        doc.open();
        doc.save();
        doc.close();
    }
}
-- Database Queries

-- Find all customers with postal code 1010
SELECT *
FROM Customers
where postalCode = 1010


-- Find the phone number for the supplier with the id 11
SELECT phone
FROM Suppliers
WHERE supplierID = 11 

-- List first 10 orders placed, sorted descending by the order date
SELECT * FROM [Orders]
ORDER BY OrderDate desc

-- Find all customers that live in London, Madrid, or Brazil
SELECT * 
FROM customers
WHERE country = "Brazil" OR city = "London" OR city = "Madrid" 

-- Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"
INSERT INTO Customers(CustomerName, ContactName, Address, PostalCode, Country)
VALUES("Bilbo Bagging", "Sunil Karki", "2333 highway dr", 34344, "Nepal")


-- Update Bilbo Baggins record so that the postal code changes to "11122"
UPDATE Customers
SET PostalCode = 33333
WHERE CustomerName = "Bilbo Bagging"

-- (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted

-- (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name


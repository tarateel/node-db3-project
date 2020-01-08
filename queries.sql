-- -- Multi-Table Query Practice

-- -- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

-- SELECT ProductName FROM Product
-- JOIN Category ON Product.CategoryId = Category.Id;

-- -- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

-- SELECT O.Id, S.CompanyName FROM "Order" AS O
-- JOIN Shipper as S
-- WHERE O.ShipVia = S.Id
-- AND O.OrderDate < "2012-08-09";

-- -- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

-- SELECT P.ProductName, P.QuantityPerUnit FROM Product as P
-- JOIN OrderDetail as OD on OD.ProductId = P.Id
-- JOIN "Order" as O on  OD.OrderId = O.Id
-- where O.Id = "10251"

-- -- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

-- SELECT O.Id AS "Order Id", C.CompanyName AS "Company Name", E.LastName AS "Employee's Last Name" FROM "Order" AS O
-- JOIN Customer AS C ON O.CustomerId = C.Id
-- JOIN Employee AS E ON O.EmployeeId = E.Id;
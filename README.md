# Immutable ve Mutable Kavramları

## Javascript iki adet tip barındırmaktadır.
## - Value Types
## - Reference Types

## Value types primitif tipler için kullanılan terimdir. Boolean, Char ve Number gibi ifadeler için kullanırlar.
## Reerence types ise Array ve Object leri içerisine almaktadır.

## Value Types lar immutable olarak yani yani değiştirilemezler.

## Reference Types lar ise değiştirilebilirler yani mutable lardır.

## Immutable Örnek

## var a = 10; var b = a; a = 20; dediğinizde console.log(a)=>20 console.log(b)=>10 sonucunu verecektir.

## Burada a ve b birbirine eşitliğinde refereansları eşitlenmez. Bunun yerine a'nın bir kopyası oluşturulur. Ram de yeni bir yer allocate edilir.

## Mutable Örnek

## var a={name: 'Onur', age: 25}; var b = a; a.age = 30; dediğinizde her console.log(a) ve console.log(b) aynı sonucu basacaktır => {name: 'Onur', age: 30}

## Görüldüğü üzere referans adresleri eşitlendiği için b yi değiştirebildik. Ancak mutable değerler immutable hale getirilebilirler

## var b = Object.assign({}, a) deyip aynı işlem tekrarlandığında farklı sonuçlar verildiği Görülecektir.

# Redux

## Redux ın üç temel prensibi bulunuur

## Tek bir store bulunur. Bu işlemi createStore() işlemi ile yaparız ve combine ederiz.
## Redux immutable state yapısına sahiptir. Yani reducer dışında herhangi bir yerden state değiştirilmesi mümkün değildir.
## State de yapılan değişiklik bir fonskiyonu ifade eder.


# Mobx

## MOBX redux ın aksine reactive bir progralama mantığı ile çalışır. Yani a = b + c dediğinizde ve b ya da c de bir değişiklik yaptığınızda a otomatik olarak değişecektir.

## Yani mobx mutable yapıdadır. Stateler reducer lar içerisinde set fonskiyonlarıyla değişmez. Ancak @action state değiştirlen fonksiyon tanımlamalarında redux' takine benzer şekilde kullanılır.

# Redux vs MOBX

## Redux ta bir state overwrite edilemez yeni state pervious state ile yer değiştirir. Ancak mobx'te state güncellenir. Bunun dışında mobx kullanırken birden fazla store kullanarak yönetimi kolaylaştırabilirsiniz. Ve reducer selector gibi işlemlere gerek duymadığı için öğrenmesi ve yazması redux'a göre daha kolaydır.

## Ancak mobx mutable olduğu için çok fazla state içeren büyük bir projede risk oluşturur. Çünkü, hangi state in hangi class ta ve ya componenent te nasıl değiştirildiğini ya da yanlışlıkla değiştirilen state in nerden tetiklendiğini bulmak zor olacaktır. Ayrıca tek bir store kullanmak, pair programming şeklinde çalışanlar için daha düzenli bir yapı oluşturacaktır. Tüm set işlemerinin reducer üzerinden yürümesi state takibini kolaylaştıracaktır. 




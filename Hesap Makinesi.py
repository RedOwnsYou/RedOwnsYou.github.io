

x = int(input("1. sayı: "))
y = int(input("2. sayı: "))
z = input("Hangi işlem? ")

if z == "toplama":
    print("Cevap:", x + y)

elif z == "çıkarma":
    print("Cevap:", x - y)
elif z == "çarpma":
    print("Cevap:", x * y)

elif z == "bölme":
    print("Cevap:", x / y)

else:
    print("Bu işlem mevcut değildir / doğru yazmadınız. Lütfen küçük harf kullanın")

a = input("Çıkmak için enter basın")

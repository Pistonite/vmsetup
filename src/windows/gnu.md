# Other GNU Utils

## Make
Download libintl (`libintl-0.14.4-bin.zip`) from https://gnuwin32.sourceforge.net/packages/libintl.htm
```powershell
Expand-Archive $env:USERPROFILE/Downloads/libintl-0.14.4-bin.zip -DestinationPath $env:USERPROFILE/dotbin/extra/libintl
sudo ln -s $env:USERPROFILE/dotbin/extra/libintl/bin/libintl3.dll $env:USERPROFILE/dotbin/extra/libintl3.dll
rm $env:USERPROFILE/Downloads/libintl-0.14.4-bin.zip
```

Download libiconv2 (`libiconv-1.9.2-1-bin.zip`) from https://gnuwin32.sourceforge.net/packages/libiconv.htm
```powershell
Expand-Archive $env:USERPROFILE/Downloads/libiconv-1.9.2-1-bin.zip -DestinationPath $env:USERPROFILE/dotbin/extra/libiconv
sudo ln -s $env:USERPROFILE/dotbin/extra/libiconv/bin/libiconv2.dll $env:USERPROFILE/dotbin/extra/libiconv2.dll
sudo ln -s $env:USERPROFILE/dotbin/extra/libiconv/bin/libcharset1.dll $env:USERPROFILE/dotbin/extra/libcharset1.dll
rm $env:USERPROFILE/Downloads/libiconv-1.9.2-1-bin.zip
```

Download `make-3.81-bin.zip` from https://sourceforge.net/projects/gnuwin32/files/make/3.81/
```powershell
Expand-Archive $env:USERPROFILE/Downloads/make-3.81-bin.zip -DestinationPath $env:USERPROFILE/dotbin/extra/make
sudo ln -s $env:USERPROFILE/dotbin/extra/make/bin/make.exe $env:USERPROFILE/dotbin/extra/make.exe
rm $env:USERPROFILE/Downloads/make-3.81-bin.zip
```

## Wget
```powershell
iwr https://eternallybored.org/misc/wget/1.21.4/64/wget.exe -OutFile $env:USERPROFILE/dotbin/extra/wget.exe
```

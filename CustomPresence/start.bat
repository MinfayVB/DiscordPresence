:menu
@echo off & color 0f & cls & title start.bat
mode 60,20
echo.
echo   Choisir votre action
echo.
@echo off & color 09
echo      [1] Activer le statut perso
echo.
echo      [2] Fermer le programme
echo.

set /p answer="Quelle option choisissez-vous ? > "
if /i {%ANSWER%}=={1} (goto :1)
if /i {%ANSWER%}=={2} (goto :2)
goto :menu
exit

:1
@echo off & color 02
echo.
echo Activation du statut perso... [MERCI DE NE PAS FERMER CETTE PAGE]
echo.
node index.js
echo.
echo Activation reussite ! [MERCI DE NE PAS FERMER CETTE PAGE]
echo.
echo Pour fermer cette fenetre merci d'appuyer sur une touche.
pause

:2
@echo off & color 04
echo.
echo Fermeture du programme en cours...
ping localhost -n 4 >nul
exit


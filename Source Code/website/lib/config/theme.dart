import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import 'colors.dart';

// ignore: avoid_classes_with_only_static_members, camel_case_types
class WebsiteTheme {
  static ThemeData of(BuildContext context) {
    final TextTheme textTheme = GoogleFonts.exo2TextTheme();

    return ThemeData(
      useMaterial3: true,
      hoverColor: Colors.grey.shade100,
      colorScheme: const ColorScheme.light().copyWith(
        primary: WebsiteColors.primaryColor,
        primaryContainer: WebsiteColors.secondaryColor,
        onPrimary: Colors.black,
        secondary: WebsiteColors.secondaryColor,
        onSecondary: WebsiteColors.primaryColor,
      ),
      textTheme: textTheme.copyWith(
        displaySmall: textTheme.displaySmall!.copyWith(
          fontSize: 22,
          fontWeight: FontWeight.normal,
        ),
        titleLarge: textTheme.titleLarge!.copyWith(
          fontWeight: FontWeight.w900,
          fontSize: 18,
        ),
        titleMedium: textTheme.titleMedium!.copyWith(
          fontWeight: FontWeight.w600,
          fontSize: 16,
        ),
        // bodyLarge: textTheme.bodyLarge!.copyWith(
        //   fontSize: 16,
        // ),
        // bodyMedium: textTheme.bodyMedium!.copyWith(
        //   fontSize: 14,
        // ),
        // bodySmall: textTheme.bodySmall!.copyWith(
        //   fontSize: 12,
        //   color: Colors.grey.shade700,
        // ),
      ),
      appBarTheme: const AppBarTheme(
        backgroundColor: WebsiteColors.primaryColor,
      ),
      tooltipTheme: const TooltipThemeData(
        margin: EdgeInsets.all(5),
      ),
      cardTheme: CardTheme(
        elevation: 5,
        shadowColor: Colors.white,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
      ),
      textButtonTheme: TextButtonThemeData(
        style: ButtonStyle(
          padding: MaterialStateProperty.all<EdgeInsets>(
            const EdgeInsets.all(12),
          ),
          overlayColor: MaterialStateProperty.all<Color>(
            const Color.fromARGB(255, 255, 250, 230),
          ),
          foregroundColor: MaterialStateProperty.all<Color>(
            Colors.amber.shade400,
          ),
          shape: MaterialStateProperty.all<OutlinedBorder>(
            RoundedRectangleBorder(
              side: BorderSide(
                color: Colors.amber.shade400,
                width: 0.75,
              ),
              borderRadius: BorderRadius.circular(10),
            ),
          ),
        ),
      ),
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          elevation: 0,
          shape: const StadiumBorder(),
          backgroundColor: WebsiteColors.primaryColor,
          maximumSize: const Size(double.infinity, 56),
          minimumSize: const Size(double.infinity, 56),
        ),
      ),
      textSelectionTheme: TextSelectionThemeData(
        cursorColor: Colors.grey.shade700,
        selectionColor: Colors.grey.shade500,
        selectionHandleColor: Colors.grey.shade700,
      ),
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: Colors.grey.shade200,
        iconColor: Colors.grey.shade600,
        prefixIconColor: Colors.grey.shade600,
        contentPadding: const EdgeInsets.all(12),
        focusedBorder: const OutlineInputBorder(
          borderRadius: BorderRadius.all(Radius.circular(10)),
        ),
        border: const OutlineInputBorder(
          borderRadius: BorderRadius.all(Radius.circular(10)),
        ),
      ),
      scrollbarTheme: ScrollbarThemeData(
        interactive: true,
        crossAxisMargin: -2,
        thumbColor: MaterialStateProperty.all(WebsiteColors.secondaryColor),
        thickness: MaterialStateProperty.all(5),
        radius: const Radius.circular(20),
      ),
      snackBarTheme: const SnackBarThemeData(
        elevation: 10,
        backgroundColor: WebsiteColors.secondaryColor,
        contentTextStyle: TextStyle(color: Colors.white),
      ),
      floatingActionButtonTheme: const FloatingActionButtonThemeData(
        elevation: 10,
        foregroundColor: WebsiteColors.primaryColor,
        backgroundColor: WebsiteColors.secondaryColor,
      ),
    );
  }
}

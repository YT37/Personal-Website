import 'package:flutter/material.dart';

import '../config/constants.dart';
import '../services/responsive.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 500,
      child: Center(
        child: Responsive(
          desktop: Padding(
            padding: const EdgeInsets.all(10),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Text.rich(
                  TextSpan(
                    text: "Hey,",
                    style: theme.textTheme.displayLarge,
                    children: [
                      TextSpan(
                        text:
                            "\nI'm Yug, a Student, Entreprenuer,\nand a Tech Enthusiast",
                        style: theme.textTheme.displayMedium,
                      ),
                      TextSpan(
                        text: "\n\nFind my details and work below!",
                        style: theme.textTheme.displayMedium,
                      ),
                    ],
                  ),
                ),
                Expanded(child: Image.asset("assets/images/Photo.png")),
              ],
            ),
          ),
          mobile: Column(),
        ),
      ),
    );
  }
}

import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import '../config/constants.dart';
import '../services/responsive.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 500,
      child: Center(
        child: Responsive(
          desktop: Row(
            mainAxisAlignment: MainAxisAlignment.spaceAround,
            children: [
              Padding(
                padding: const EdgeInsets.only(left: 20),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.start,
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
                    SizedBox(height: 10),
                    TextButton(
                      onPressed: () async {
                        final Uri _url = Uri.parse(resume);
                        if (await canLaunchUrl(_url)) await launchUrl(_url);
                      },
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.end,
                        children: [
                          const Icon(Icons.download, size: 22),
                          const SizedBox(width: 5),
                          Text(
                            "Resume",
                            style: theme.textTheme.titleLarge,
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              Flexible(child: Image.asset("assets/images/Photo.png")),
            ],
          ),
          mobile: Column(),
        ),
      ),
    );
  }
}

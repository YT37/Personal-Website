import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart' as url_launcher;

import '../config/constants.dart';

class SocialButtons extends StatelessWidget {
  const SocialButtons({super.key});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: List.generate(
        socials.length,
        (index) {
          final List<dynamic> _social = socials[index];

          return GestureDetector(
            onTap: () async {
              final Uri _url = Uri.parse(_social[1]);

              if (await url_launcher.canLaunchUrl(_url)) {
                await url_launcher.launchUrl(_url);
              }
            },
            child: CircleAvatar(
              radius: 18,
              backgroundColor: index % 2 != 0
                  ? theme.colorScheme.tertiary
                  : theme.colorScheme.secondary,
              child: Icon(_social[0], size: 18),
            ),
          );
        },
      ),
    );
  }
}

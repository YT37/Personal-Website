import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart' as url_launcher;

import '../config/constants.dart';

class SocialButtons extends StatelessWidget {
  final bool expanded;
  const SocialButtons({
    super.key,
    this.expanded = false,
  });

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
      children: List.generate(
        socials.length,
        (index) {
          final List<dynamic> _social = socials[index];

          return Padding(
            padding: expanded
                ? const EdgeInsets.all(15)
                : const EdgeInsets.symmetric(horizontal: 8),
            child: Container(
              decoration: expanded
                  ? const BoxDecoration(
                      boxShadow: [
                        BoxShadow(
                          blurRadius: 50,
                          spreadRadius: -1,
                        ),
                      ],
                    )
                  : null,
              child: CircleAvatar(
                radius: 18,
                child: IconButton(
                  onPressed: () async {
                    final Uri _url = Uri.parse(_social[1]);

                    if (await url_launcher.canLaunchUrl(_url)) {
                      await url_launcher.launchUrl(_url);
                    }
                  },
                  icon: Icon(
                    _social[0],
                    size: 18,
                    color: theme.colorScheme.primary,
                  ),
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}

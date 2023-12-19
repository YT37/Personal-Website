import 'package:flutter/material.dart';
import 'package:get/get.dart';
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
          final Rx<bool> _hover = false.obs;
          final List<dynamic> _social = socials[index];

          return MouseRegion(
            onEnter: (_) => _hover.value = true,
            onExit: (_) => _hover.value = false,
            child: GestureDetector(
              onTap: () async {
                final Uri _url = Uri.parse(_social[1]);

                if (await url_launcher.canLaunchUrl(_url)) {
                  await url_launcher.launchUrl(_url);
                }
              },
              child: Obx(
                () => CircleAvatar(
                  radius: 18,
                  backgroundColor: index % 2 != 0
                      ? theme.colorScheme.tertiary
                      : theme.colorScheme.secondary,
                  child: Padding(
                    padding: EdgeInsets.only(
                      right: _social[1].contains("youtube") ? 2 : 0,
                    ),
                    child: Icon(_social[0], size: _hover.value ? 21 : 18),
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

import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:url_launcher/url_launcher.dart' as url_launcher;

import '../services/responsive.dart';

class InfoDialog extends StatelessWidget {
  final Map<String, dynamic> data;

  const InfoDialog({super.key, required this.data});

  @override
  Widget build(BuildContext context) {
    return Dialog(
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(10),
      ),
      surfaceTintColor: context.theme.primaryColor,
      child: Container(
        height: Responsive.isDesktop(context) ? 500 : 700,
        width: 600,
        padding: const EdgeInsets.all(10),
        child: Column(
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  data["title"],
                  style: context.textTheme.displayMedium,
                ),
                IconButton(
                  onPressed: () => Navigator.pop(context),
                  icon: const Icon(Icons.close),
                ),
              ],
            ),
            const Divider(),
            const SizedBox(height: 20),
            Expanded(
              child: Responsive(
                mobile: Column(
                  children: [
                    _Image(data["image"]),
                    const SizedBox(height: 20),
                    _Description(data["description"]),
                    if (data["links"].isNotEmpty) _Links(data["links"]),
                  ],
                ),
                desktop: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Flexible(
                      child: Column(
                        children: [
                          _Description(data["description"]),
                          if (data["links"].isNotEmpty) _Links(data["links"]),
                        ],
                      ),
                    ),
                    _Image(data["image"]),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _Links extends StatelessWidget {
  final List<Map<String, dynamic>> links;

  const _Links(this.links);

  @override
  Widget build(BuildContext context) {
    return Flexible(
      child: SizedBox(
        height: 200,
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Divider(height: 30),
              Text(
                "Links",
                style: context.textTheme.titleLarge,
              ),
              ...List.generate(links.length, (index) {
                final String _link = links[index]["link"];
                final IconData _icon = links[index]["icon"];

                return GestureDetector(
                  onTap: () async {
                    final Uri _url = Uri.parse(_link);

                    if (await url_launcher.canLaunchUrl(_url)) {
                      await url_launcher.launchUrl(_url);
                    }
                  },
                  child: Padding(
                    padding: const EdgeInsets.symmetric(vertical: 10),
                    child: Row(
                      children: [
                        Icon(
                          _icon,
                          color: context.theme.colorScheme.onPrimary,
                        ),
                        const SizedBox(width: 10),
                        Flexible(
                          child: Text(
                            _link,
                            overflow: TextOverflow.ellipsis,
                            style: context.textTheme.titleMedium!.copyWith(
                              color: const Color(0xFF0000EE),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                );
              }),
            ],
          ),
        ),
      ),
    );
  }
}

class _Description extends StatelessWidget {
  final String description;

  const _Description(this.description);

  @override
  Widget build(BuildContext context) {
    return Flexible(
      child: SizedBox(
        height: 200,
        child: SingleChildScrollView(
          child: Text(description, style: context.textTheme.titleMedium),
        ),
      ),
    );
  }
}

class _Image extends StatelessWidget {
  final String image;

  const _Image(this.image);

  @override
  Widget build(BuildContext context) {
    return Flexible(
      child: ClipRRect(
        borderRadius: const BorderRadius.all(Radius.circular(10)),
        child: Image.asset(
          image,
          width: 250,
          fit: BoxFit.fitWidth,
        ),
      ),
    );
  }
}

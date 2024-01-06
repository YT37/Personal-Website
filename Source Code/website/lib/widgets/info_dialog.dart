import 'package:auto_size_text/auto_size_text.dart';
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
        width: 700,
        padding: const EdgeInsets.all(10),
        child: Column(
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                AutoSizeText(
                  data["title"],
                  maxLines: 1,
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
                mobile: SingleChildScrollView(
                  child: SizedBox(
                    height: 1000,
                    child: Column(
                      children: [
                        _Images(data["images"]),
                        const SizedBox(height: 20),
                        Flexible(
                          child: Text(
                            data["description"],
                            style: context.textTheme.titleMedium,
                          ),
                        ),
                        _Links(data["links"]),
                      ],
                    ),
                  ),
                ),
                desktop: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Flexible(
                      child: Column(
                        children: [
                          _Description(data["description"]),
                          _Links(data["links"]),
                        ],
                      ),
                    ),
                    _Images(data["images"]),
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
  final List<dynamic> links;

  const _Links(this.links);

  @override
  Widget build(BuildContext context) {
    return Flexible(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Divider(height: 20),
          Text(
            "Links",
            style: context.textTheme.titleLarge,
          ),
          SizedBox(height: 10),
          if (links.isNotEmpty)
            SizedBox(
              height: 80,
              child: SingleChildScrollView(
                child: Column(
                  children: List.generate(links.length, (index) {
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
                        padding: const EdgeInsets.symmetric(vertical: 2),
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
                ),
              ),
            ),
          if (links.isEmpty)
            Center(
              child: Text(
                "No Links Available",
                style: context.textTheme.bodyLarge!
                    .copyWith(color: context.theme.colorScheme.onPrimary),
              ),
            ),
        ],
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
      flex: 2,
      child: SizedBox(
        height: 300,
        child: SingleChildScrollView(
          child: Text(
            description,
            style: context.textTheme.titleMedium,
          ),
        ),
      ),
    );
  }
}

class _Images extends StatelessWidget {
  final List<String> images;

  const _Images(this.images);

  @override
  Widget build(BuildContext context) {
    final Rx<int> _image = 0.obs;

    return Flexible(
      child: Obx(
        () => Column(
          children: [
            ClipRRect(
              // TODO: Mobile & No Radius Showing
              borderRadius: const BorderRadius.all(Radius.circular(10)),
              child: Image.asset(
                images[_image.value],
                width: 300,
                height: 300,
                errorBuilder: (context, _, __) => Container(
                  height: 300,
                  width: 300,
                  decoration: const BoxDecoration(
                    color: Colors.grey,
                    borderRadius: BorderRadius.all(Radius.circular(10)),
                  ),
                  child: const Icon(Icons.question_mark),
                ),
              ),
            ),
            const SizedBox(height: 10),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                IconButton(
                  icon: const Icon(Icons.arrow_back_ios),
                  hoverColor: Colors.transparent,
                  focusColor: Colors.transparent,
                  splashColor: Colors.transparent,
                  highlightColor: Colors.transparent,
                  onPressed: _image.value > 0 ? () => _image.value -= 1 : null,
                ),
                ...List.generate(
                  images.length,
                  (index) => GestureDetector(
                    onTap: () => _image.value = index,
                    child: Container(
                      height: 10,
                      width: 10,
                      margin: const EdgeInsets.all(5),
                      decoration: BoxDecoration(
                        color:
                            index == _image.value ? Colors.black : Colors.grey,
                        borderRadius:
                            const BorderRadius.all(Radius.circular(500)),
                      ),
                    ),
                  ),
                ),
                IconButton(
                  icon: const Icon(Icons.arrow_forward_ios),
                  hoverColor: Colors.transparent,
                  focusColor: Colors.transparent,
                  splashColor: Colors.transparent,
                  highlightColor: Colors.transparent,
                  onPressed: _image.value < images.length - 1
                      ? () => _image.value += 1
                      : null,
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

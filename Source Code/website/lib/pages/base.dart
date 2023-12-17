import 'dart:html' as HTML;

import 'package:flutter/material.dart' hide PageController;
import 'package:get/get.dart';
import 'package:url_launcher/url_launcher.dart' as URLLauncher;

import '../config/constants.dart';
import '../services/responsive.dart';
import '../tools/controllers/page.dart';

class BasePage extends StatefulWidget {
  const BasePage({super.key});

  @override
  State<BasePage> createState() => _BasePageState();
}

class _BasePageState extends State<BasePage> {
  final PageController _pageController = Get.find<PageController>();

  @override
  Widget build(BuildContext context) {
    print(_pageController.current);

    return Scaffold(
      drawer: Responsive.isMobile(context) ? const _MobileHeader() : null,
      appBar: AppBar(
        backgroundColor: Colors.white,
        title: Responsive.isMobile(context)
            ? const Text("Yug Thapar")
            : const _DesktopHeader(),
        centerTitle: Responsive.isMobile(context),
      ),
      body: Obx(
        () => SafeArea(
          child: _pageController.page,
        ),
      ),
    );
  }
}

class _MobileHeader extends StatelessWidget {
  const _MobileHeader();

  @override
  Widget build(BuildContext context) {
    final PageController _pageController = Get.find<PageController>();

    return Drawer(
      child: ListView(),
    );
  }
}

class _DesktopHeader extends StatelessWidget {
  const _DesktopHeader();

  @override
  Widget build(BuildContext context) {
    final PageController _pageController = Get.find<PageController>();

    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Text(
          "Yug Thapar",
          style: theme.textTheme.displaySmall,
        ),
        Obx(
          () => Row(
            children: List.generate(pages.length, (index) {
              final String _title = pages[index]![0];
              final bool _selected = index == _pageController.current;

              return GestureDetector(
                onTap: () {
                  _pageController.current = index;

                  HTML.window.history.pushState(
                    null,
                    _title.toLowerCase(),
                    "/${_title.toLowerCase()}",
                  );
                },
                child: Padding(
                  padding: EdgeInsets.fromLTRB(
                    10,
                    0,
                    10,
                    !_selected ? 8 : 0,
                  ),
                  child: Text(
                    _title,
                    textAlign: TextAlign.center,
                    style: _selected
                        ? theme.textTheme.titleMedium!.copyWith(
                            color: Colors.transparent,
                            shadows: [
                              const Shadow(offset: Offset(0, -5)),
                            ],
                            decorationThickness: 4,
                            decoration: TextDecoration.underline,
                            decorationColor: theme.colorScheme.secondary,
                          )
                        : theme.textTheme.titleMedium,
                  ),
                ),
              );
            }),
          ),
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: List.generate(
            socials.length,
            (index) {
              final List<dynamic> _social = socials[index];

              return IconButton(
                onPressed: () async {
                  final Uri _url = Uri.parse(_social[2]);

                  if (await URLLauncher.canLaunchUrl(_url)) {
                    await URLLauncher.launchUrl(_url);
                  }
                },
                icon: Icon(
                  _social[0],
                  size: 22,
                  color: _social[1],
                ),
              );
            },
          ),
        ),
      ],
    );
  }
}

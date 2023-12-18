import 'package:flutter/material.dart' hide PageController;
import 'package:get/get.dart';
import 'package:scrollable_positioned_list/scrollable_positioned_list.dart';

import '../config/constants.dart';
import '../services/responsive.dart';

class BasePage extends StatefulWidget {
  const BasePage({super.key});

  @override
  State<BasePage> createState() => _BasePageState();
}

class _BasePageState extends State<BasePage> {
  final ItemScrollController _scrollController =
      Get.put(ItemScrollController());

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: Responsive.isMobile(context) ? const _MobileHeader() : null,
        title: Responsive.isDesktop(context) ? const _DesktopHeader() : image(),
      ),
      body: SafeArea(
        child: ScrollablePositionedList.builder(
          itemCount: pages.length,
          itemBuilder: (_, page) => pages[page]![1],
          itemScrollController: _scrollController,
        ),
      ),
    );
  }
}

class _MobileHeader extends StatelessWidget {
  const _MobileHeader();

  @override
  Widget build(BuildContext context) {
    final ItemScrollController _scrollController =
        Get.find<ItemScrollController>();

    return PopupMenuButton(
      icon: const Icon(Icons.menu),
      onSelected: (index) {
        _scrollController.scrollTo(
          index: index,
          duration: const Duration(milliseconds: 500),
        );
      },
      itemBuilder: (_) => List.generate(
        pages.length,
        (index) {
          final String _title = pages[index]![0];
          final IconData _icon = pages[index]![2];

          return PopupMenuItem(
            value: index,
            child: Row(
              children: [
                Icon(_icon),
                Padding(
                  padding: const EdgeInsets.only(left: 15, bottom: 3),
                  child: Text(_title, style: theme.textTheme.displaySmall),
                ),
              ],
            ),
          );
        },
      ),
    );
  }
}

class _DesktopHeader extends StatelessWidget {
  const _DesktopHeader();

  @override
  Widget build(BuildContext context) {
    final ItemScrollController _scrollController =
        Get.find<ItemScrollController>();

    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          Flexible(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                image(),
                const SizedBox(width: 10),
                Hero(
                  tag: "name",
                  child: Text(
                    "Yug Thapar",
                    style: theme.textTheme.displaySmall,
                  ),
                ),
              ],
            ),
          ),
          Flexible(
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: List.generate(pages.length, (index) {
                final String _title = pages[index]![0];
                final Rx<bool> _hover = false.obs;

                return MouseRegion(
                  onEnter: (_) {
                    _hover.value = true;
                  },
                  onExit: (_) {
                    _hover.value = false;
                  },
                  child: GestureDetector(
                    onTap: () {
                      _scrollController.scrollTo(
                        index: index,
                        duration: const Duration(milliseconds: 500),
                      );
                    },
                    child: Obx(
                      () => Text(
                        _title,
                        textAlign: TextAlign.center,
                        style: theme.textTheme.titleMedium!
                            .copyWith(fontSize: _hover.value ? 19 : 18),
                      ),
                    ),
                  ),
                );
              }),
            ),
          ),

          // const Flexible(
          //   fit: FlexFit.tight,
          //   child: SocialButtons(),
          // ),
        ],
      ),
    );
  }
}

Image image() => Image.asset("assets/images/Logo.png");

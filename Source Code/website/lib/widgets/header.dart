import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:scrollable_positioned_list/scrollable_positioned_list.dart';

import '../config/constants.dart';
import '../services/responsive.dart';

class Header extends StatelessWidget implements PreferredSizeWidget {
  const Header({super.key});

  @override
  Size get preferredSize => const Size.fromHeight(50);

  @override
  Widget build(BuildContext context) {
    return AppBar(
      leading: Responsive.isMobile(context) ? const _MobileHeader() : null,
      title: Responsive.isDesktop(context) ? const _DesktopHeader() : image(),
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
          final String _title = pages[index]["name"];
          final IconData _icon = pages[index]["icon"];

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
                final String _title = pages[index]["name"];
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
        ],
      ),
    );
  }
}

Image image() => Image.asset(
      "assets/images/logo.png",
      height: 40,
      width: 40,
    );

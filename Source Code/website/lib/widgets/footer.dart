import 'package:flutter/material.dart';
import 'package:get/get.dart';

import '../config/constants.dart';
import '../services/responsive.dart';
import 'social_buttons.dart';

class Footer extends StatelessWidget {
  const Footer({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: Responsive.isDesktop(context) ? 165 : 330,
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [
            context.theme.colorScheme.secondary,
            context.theme.colorScheme.tertiary,
          ],
        ),
      ),
      padding: const EdgeInsets.all(10),
      child: Column(
        children: [
          Responsive(
            desktop: Column(
              children: [
                const IntrinsicHeight(
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                    children: [
                      Flexible(fit: FlexFit.tight, child: _Greetings()),
                      Flexible(child: VerticalDivider()),
                      Flexible(child: _Details()),
                    ],
                  ),
                ),
                madeBy(context),
              ],
            ),
            mobile: Expanded(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Center(child: _Greetings()),
                  const Divider(),
                  const _Details(),
                  madeBy(context),
                ],
              ),
            ),
          ),
          //  if(Responsive.isMobile(context)) madeBy(),
        ],
      ),
    );
  }
}

Column madeBy(BuildContext context) {
  return Column(
    children: [
      const Divider(),
      const SizedBox(height: 5),
      Text(
        "Made By : Yug Thapar",
        style: context.textTheme.titleSmall!.copyWith(
          color: context.theme.colorScheme.onSecondary,
          fontWeight: FontWeight.bold,
        ),
      ),
    ],
  );
}

class _Greetings extends StatelessWidget {
  const _Greetings();

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Center(
          child: Text(
            "Thanks for visting my site, \nIt was great that you were here!",
            textAlign: Responsive.isMobile(context) ? TextAlign.center : null,
            style: context.textTheme.titleLarge!.copyWith(
              color: context.theme.colorScheme.onSecondary,
              fontWeight: FontWeight.normal,
            ),
          ),
        ),
        const SizedBox(height: 10),
        const SocialButtons(),
      ],
    );
  }
}

class _Details extends StatelessWidget {
  const _Details();

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: List.generate(details.length, (index) {
        final String _detail = details[index]["detail"];
        final IconData _icon = details[index]["icon"];

        return Padding(
          padding: EdgeInsets.all(Responsive.isMobile(context) ? 10 : 5),
          child: Row(
            children: [
              Icon(_icon, color: context.theme.colorScheme.onPrimary),
              const SizedBox(width: 10),
              SelectableText(
                _detail,
                style: context.textTheme.titleSmall!
                    .copyWith(color: context.theme.colorScheme.onSecondary),
              ),
            ],
          ),
        );
      }),
    );
  }
}

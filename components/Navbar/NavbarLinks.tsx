import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarTrigger
} from "@/components/ui/menubar";
export default function NavbarLinks() {
  return (
    <Menubar>
      {/* Solutions */}
      <MenubarMenu>
        <MenubarTrigger>Solutions</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Websites & Landings</MenubarItem>
          <MenubarItem>Product Design</MenubarItem>
          <MenubarItem>Custom Software</MenubarItem>
          <MenubarItem>Process Automation</MenubarItem>
          <MenubarItem>Web Apps</MenubarItem>
          <MenubarItem>IT Consulting</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      {/* Blog */}
      <MenubarMenu>
        <MenubarTrigger>Blog</MenubarTrigger>
      </MenubarMenu>
      {/* Contact */}
      {/* TODO: Add link to mail and socials */}
      <MenubarMenu>
        <MenubarTrigger>Contact</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Add Profile...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
